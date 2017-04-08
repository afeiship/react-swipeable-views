import noop from 'noop';
import React,{PropTypes,PureComponent} from 'react';

export default class extends PureComponent{
  static propTypes = {
    unit:PropTypes.string,
    animate:PropTypes.string,
    duration:PropTypes.number,
    activeIndex:PropTypes.number,
    onNext:PropTypes.func,
    onPrev:PropTypes.func,
    onChange:PropTypes.func,
  };

  static defaultProps = {
    unit:'width',
    animate:'linear',
    duration:0.3,
    activeIndex: 0,
    onNext:noop,
    onPrev:noop,
    onChange:noop
  };

  constructor(props){
    super(props);
    this.state = {
      unit:props.unit,
      animate:props.animate,
      duration: props.duration,
      activeIndex: props.activeIndex,
      translate: 0,
      bound:{}
    };
  }

  componentWillMount(){
    this.toIndex();
  }

  componentDidMount() {
    const {root} = this.refs;
    this.setState({
      bound:root.getBoundingClientRect()
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
    //to be implement
  }

  syncState(){
    setTimeout(()=>{
      this.setState({
        activeIndex: this._index - this._boundary.min
      });
    })
  }

  next(inEvent){
    this._index++;
    this.toIndex();
    setTimeout(()=>{
      this.props.onNext(inEvent);
      this.props.onChange(inEvent);
    })
  }

  prev(inEvent) {
    this._index--;
    this.toIndex();
    setTimeout(()=>{
      this.props.onNext(inEvent);
      this.props.onChange(inEvent);
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
