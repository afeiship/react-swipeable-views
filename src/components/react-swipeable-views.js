import React,{PropTypes,PureComponent} from 'react';
import noop from 'noop';

export default class extends PureComponent{
  static propTypes = {
    unit:PropTypes.string,
    animate:PropTypes.string,
    duration:PropTypes.number,
    activeIndex:PropTypes.number,
    onNext:PropTypes.func,
    onPrev:PropTypes.func,
    onChange:PropTypes.func,
    onMove:PropTypes.func
  };

  static defaultProps = {
    unit:'width',
    animate:'linear',
    duration:0.3,
    activeIndex: 0,
    onNext:noop,
    onPrev:noop,
    onChange:noop,
    onMove:noop
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

  play(inIndex,inCallback){
    this._index = inIndex + this._boundary.min;
    this.toIndex(inCallback);
  }

  slide(inCallback){
    this.setState({
      duration:this.props.duration,
      translate:`-${this._index * 100/this._length}%`
    },inCallback || noop);
  }

  toIndex(inCallback){
    const callback = inCallback || noop;
    this.updateIndex();
    this.slide(()=>{
      this.setState({
        activeIndex: this._index - this._boundary.min
      },()=>{
        callback(this);
        this.props.onChange(this);
      });
    });
  }

  updateIndex(){
    //to be implement
  }

  next(inEvent){
    this._index++;
    this.toIndex(()=>{
      this.props.onNext(inEvent);
      this.props.onMove(inEvent);
    });
  }

  prev(inEvent) {
    this._index--;
    this.toIndex(()=>{
      this.props.onPrev(inEvent);
      this.props.onMove(inEvent);
    });
  }

  onSwipingNext(ev, delta) {
    const _translate = this._index * this.state.bound[this.state.unit];
    this.setState({
      duration: 0,
      translate: `${-_translate-delta}px`
    });
  }

  onSwipingPrev(ev,delta){
    const _translate = this._index * this.state.bound[this.state.unit];
    this.setState({
      duration:0,
      translate: `${-_translate+delta}px`
    });
  }
}
