import {createContext, useContext} from "react";
import ActivityStore from "./activityStore";


// 1. Add stores to interface
interface Store {
    activityStore: ActivityStore
}

// 2. Create new instance of stores
export const store: Store = {
    activityStore: new ActivityStore()
}

// 3. Add newly instantiated stores to a React context
export const StoreContext = createContext(store);

// 4. Use React hooks to use React context
export function useStore() {
    return useContext(StoreContext);
}
