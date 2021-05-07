import {makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import {Activity} from "../models/activity";


// MobX store initialization
export default class ActivityStore {

    // Define variables
    activityRegistry = new Map<String, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    // Constructor with all variables inside
    constructor() {
        makeAutoObservable(this)
    }


    // Create MobX actions

    get activitiesByDate() {
        return Array.from(this.activityRegistry.values())
            .sort((a,b) =>
                Date.parse(a.date) - Date.parse(b.date));

    }

    loadActivity = async (id: string) => {
        // Check if activity is in memory
        let activity = this.getActivity(id);
        // If yes display, else fetch database
        if (activity) {
            this.selectedActivity = activity;
            return activity;
        } else {
            this.loadingInitial = true;
            try {
                // Store activity in memory
                activity = await agent.Activities.details(id);
                this.setActivity(activity);
                this.selectedActivity = activity;
                // Stop loading
                this.setLoadingInitial(false);

                return activity;
            } catch (err) {
                console.log(err);
                this.setLoadingInitial(false);
            }
        }
    }

    loadActivities = async () => {
        this.loadingInitial = true;
        try {
            // Get activities from API
            const activities = await agent.Activities.list();

            // Mutating state in MobX
            activities.forEach(activity => {
                // Use private helper
                this.setActivity(activity);
            })
            this.setLoadingInitial(false);
        } catch (err) {
            console.log(err);
            this.setLoadingInitial(false);
        }
    }

    // Private helpers for loadActivity()/loadActivities
    private getActivity = (id: string) => {
        // Returns activity if exist in memory
        return this.activityRegistry.get(id);
    }
    private setActivity = (activity: Activity) => {
        activity.date = activity.date.split('T')[0];
        this.activityRegistry.set(activity.id, activity);
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createActivity = async (activity: Activity) => {
        this.loading = true;
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
        } catch (err) {
            console.log(err);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateActivity = async (activity: Activity) => {
        this.loading = true;
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);

                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
        } catch (err) {
            console.log(err);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteActivity = async (id: string) => {
        this.loading = true;
        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                this.activityRegistry.delete(id);
                this.loading = false;
            })

        } catch (err) {
            console.log(err);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}
