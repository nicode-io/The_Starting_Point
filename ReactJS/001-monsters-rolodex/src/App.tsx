import React, {Component} from 'react';
import {CardLIst}         from './components/card-list/CardList';
import './app.css';
import SearchBox          from './components/search-box/SearchBox';

interface IProps {
}

interface IState {
    monsters: IMonster[];
    searchField: string;
}

export interface IMonster {
    id: number;
    name: string;
    email: string;
}

class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    async componentDidMount() {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: IMonster[] = await result.json();
        this.setState({monsters: users});
    }

    handleChange = (e: any) => {
        this.setState({searchField: e.target.value}, () => console.log(this.state.searchField));
    };

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="app">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    handleChange={this.handleChange}
                    placeholder="Search monsters"
                />
                <CardLIst monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
