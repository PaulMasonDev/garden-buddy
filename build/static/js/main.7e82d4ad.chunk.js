(this["webpackJsonpgarden-buddy"]=this["webpackJsonpgarden-buddy"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),o=a.n(s),i=a(2),c=a(3),u=a(6),l=a(5),m=a(4),h=a(17),p=a.n(h),d=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onFormSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.searchTerm)},n.state={searchTerm:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"Enter a veggie: "),r.a.createElement("input",{type:"text",value:this.state.searchTerm,onChange:function(t){return e.setState({searchTerm:t.target.value})}})))}}]),a}(n.Component),b=(a(40),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e;if(this.props.name){e="https://raw.githubusercontent.com/damwhit/harvest_helper/master/data/vegetable_photos"+this.props.imageUrl.slice(25)+".jpg"}return r.a.createElement("div",{className:"MainInfo"},r.a.createElement("img",{src:e,alt:this.props.name}),r.a.createElement("h4",null,this.props.name),r.a.createElement("p",null,this.props.description))}}]),a}(n.Component)),f=(a(41),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){p.a.get("https://harvesthelper.herokuapp.com/api/v1/plants?api_key=4bd977e41e7468b5633f1111f82d50be").then((function(e){n.setState({data:e.data}),console.log(n.state.data)})).catch((function(e){console.log(e)}))},n.onSubmit=function(e){console.log("term:",e);var t=n.search(e,n.state.data);console.log("dataToPass: ",t),n.setState({searchTerm:e,dataPass:t}),console.log("Individual veggie: ",n.state.dataToPass)},n.search=function(e,t){for(var a=e.toLowerCase(),n=0;n<t.length;n++){var r=t[n].name.toLowerCase();if(r===a||r.includes(a))return t[n]}},n.state={data:[],searchTerm:"",dataPass:{}},n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{onSubmit:this.onSubmit}),r.a.createElement(b,{imageUrl:this.state.dataPass.image_url,name:this.state.dataPass.name,description:this.state.dataPass.description}),this.state.searchTerm)}}]),a}(n.Component));o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7e82d4ad.chunk.js.map