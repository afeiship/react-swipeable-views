import classNames from 'classnames';
import Swipeable from 'react-swipeable';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    unit:React.PropTypes.string,
    animate:React.PropTypes.string,
    duration:React.PropTypes.number,
    items:React.PropTypes.array,
    itemTemplate:React.PropTypes.func,
    activeIndex:React.PropTypes.number,
    onNext:React.PropTypes.func,
    onPrev:React.PropTypes.func,
    onChange:React.PropTypes.func,
  };

  static defaultProps = {
    unit:'width',
    animate:'linear',
    duration:0.3,
    items:[],
    itemTemplate:null,
    activeIndex: 0
  };

  constructor(props){
    super(props);
    this.state = {
      unit:props.unit,
      animate:props.animate,
      duration: props.duration,
      items: props.items,
      itemTemplate:props.itemTemplate,
      activeIndex: props.activeIndex,
      translate: 0,
      bound:{}
    };
  }

  componentWillMount(){
    this.toIndex();
  }

  componentDidMount() {
    this.setState({
      bound:this.refs.root.getBoundingClientRect()
    });
  }

  play(inIndex){
    this._index = inIndex + this._boundary.min;
    this.toIndex();
  }

  slide(){
    this.setState({
      duration:this.props.duration,
      translate:`-${this._index * 100/this._length}%`
    });
  }

  toIndex(){
    //to be implement
  }

  updateIndex(){

  }

  syncState(){
    setTimeout(()=>{
      this.setState({
        activeIndex: this._index - this._boundary.min
      });
    })
  }

  next(ev){
    this._index++;
    this.toIndex();
    setTimeout(()=>{
      this.props.onNext && (this.props.onNext(this.state));
      this.props.onChange && (this.props.onChange(this.state));
    })
  }

  prev(ev) {
    this._index--;
    this.toIndex();
    setTimeout(()=>{
      this.props.onPrev && (this.props.onNext(this.state));
      this.props.onChange && (this.props.onChange(this.state));
    })
  }

  onSwipingNext(ev, delta) {
    var _translate = this._index * this.state.bound[this.state.unit];
    this.setState({
      duration: 0,
      translate: `${-_translate-delta}px`
    });
  }

  onSwipingPrev(ev,delta){
    var _translate = this._index * this.state.bound[this.state.unit];
    this.setState({
      duration:0,
      translate: `${-_translate+delta}px`
    });
  }
}
