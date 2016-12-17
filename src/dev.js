import './dev.scss';
import ReactSwipeableViews from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-swipeable-views">
        This class used to implements!!
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
