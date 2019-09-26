import React from 'react';
import './App.scss';
import ActivityList from './components/ActivityList/ActivityList';
import axios from 'axios';
import { API_URL } from './constants';
import mappingActivityList from './helpers/mappingActivityList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activityList: [],
    };

    this.seeMore = this.seeMore.bind(this);
  }

  componentDidMount() {
    this.fetchActivityList();
  }

  fetchActivityList() {
    const { activityList } = this.state;

    axios
      .get(`${API_URL}/v3/users/56c35408de31c6b954b81080/activities`, {
        params: {
          limit: 10,
          sort: '-date',
          skip: activityList.length ? activityList.length - 1 : 0,
        },
      })
      .then(res => {
        const resultActivityList = mappingActivityList(res.data.results);

        this.setState({
          activityList:
            activityList.length > 0
              ? [...activityList, ...resultActivityList]
              : resultActivityList,
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  }

  seeMore() {
    this.fetchActivityList();
  }

  render() {
    const { activityList, error } = this.state;

    return (
      <main className="App">
        <h1>Activités</h1>
        {error ? (
          `Une erreur est survenue: ${error}`
        ) : (
          <ActivityList list={activityList} />
        )}
        <button className="btn-see-more" onClick={this.seeMore}>
          Voir plus
        </button>
      </main>
    );
  }
}
export default App;
