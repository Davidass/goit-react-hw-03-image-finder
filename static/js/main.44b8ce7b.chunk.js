(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2Pvbu","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1okk_"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1o6-1",Modal:"Modal_Modal__4rTk4"}},15:function(e,t,a){e.exports={loader:"LoaderView_loader__2ri4H"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1OwlB"}},17:function(e,t,a){e.exports={Button:"Button_Button__2SaSR"}},18:function(e,t,a){e.exports={container:"Container_container__RVqIv"}},26:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),o=a.n(n),c=a(7),s=a.n(c),i=(a(25),a(26),a(3)),l=a(4),u=a(6),m=a(5),h=a(9),d=a(13);var j={fetchPixabay:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=19223838-0e771d4957721b26290d866a0&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No response from server"))}))}};var b=function(e){return e.message,Object(r.jsx)("div",{role:"alert",children:Object(r.jsx)("p",{children:"Sorry, something went wrong. Error image"})})},g=a(14),p=a.n(g),f=(a(48),a(15)),O=a.n(f),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(p.a,{className:O.a.loader,type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})}}]),a}(n.Component),y=a(11),_=a.n(y),x=a(12),S=a.n(x),w=document.querySelector("#modal-root"),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidmount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(r.jsx)("div",{className:S.a.Overlay,onClick:this.handleBackdropClick,children:Object(r.jsx)("div",{className:S.a.Modal,children:Object(r.jsx)("img",{src:t,alt:a})})}),w)}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,n=e.largeImageURL,o=this.state.showModal;return Object(r.jsxs)("li",{className:_.a.ImageGalleryItem,children:[Object(r.jsx)("img",{src:t,alt:a,className:_.a.ImageGalleryItem_image,onClick:this.toggleModal}),o&&Object(r.jsx)(I,{onClose:this.toggleModal,src:n,alt:a})]})}}]),a}(n.Component),k=a(16),C=a.n(k);var F=function(e){var t=e.images;return Object(r.jsx)("ul",{className:C.a.ImageGallery,children:t.map((function(e,t){return Object(r.jsx)(N,{src:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL},t)}))})},M=a(17),B=a.n(M);var L=function(e){var t=e.onLoadMore;return Object(r.jsx)("button",{type:"button",className:B.a.Button,onClick:t,children:"Load more"})},G="idle",P="pending",D="resolved",E="rejected",U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],page:1,error:null,status:"idle",arePicturesOver:!1,totalHits:0},e.fetchImage=function(t){var a=e.props.imageName;e.setState({status:P}),j.fetchPixabay(a,t).then((function(a){return 0!==a.total?(e.setState((function(e){return{images:[].concat(Object(d.a)(e.images),Object(d.a)(a.hits)),arePicturesOver:a.totalHits-12*t<=0,status:D}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):Promise.reject(new Error("Invalid request"))})).catch((function(t){return e.setState({error:t,status:E})}))},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.imageName,r=this.props.imageName,n=t.page,o=this.state.page;a!==r&&(this.setState({page:1,images:[],error:null,status:G}),this.fetchImage(1)),n!==o&&1!==o&&this.fetchImage(o)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status,n=e.arePicturesOver;e.images;return a===G?Object(r.jsx)("p",{children:"Please enter a value for search images"}):a===E?Object(r.jsx)(b,{message:t.message}):a===D||a===P?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(F,{images:this.state.images}),a===D&&!n&&Object(r.jsx)(L,{onLoadMore:this.onLoadMore}),a===E&&Object(r.jsx)(v,{}),a===P&&Object(r.jsx)(v,{})]}):void 0}}]),a}(n.Component),A=a(18),R=a.n(A);var q=function(e){var t=e.children;return Object(r.jsx)("div",{className:R.a.container,children:t})},T=a(19),H=(a(49),a(8)),J=a.n(H),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handelFormSubmit=function(t){t.preventDefault();var a=e.state.imageName;if(""===a.trim())return h.b.info("Please enter search query");e.props.onSubmit(a),e.setState({imagesName:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("header",{className:J.a.Searchbar,children:Object(r.jsxs)("form",{className:J.a.SearchForm,onSubmit:this.handelFormSubmit,children:[Object(r.jsx)("button",{type:"submit",className:J.a.SearchFormBtn,children:Object(r.jsx)(T.a,{})}),Object(r.jsx)("input",{value:this.state.imageName,onChange:this.handleNameChange,className:J.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),K=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={imageName:""},e.handelFormSubmit=function(t){e.setState({imageName:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)(q,{children:[Object(r.jsx)(W,{onSubmit:this.handelFormSubmit}),Object(r.jsx)(U,{imageName:this.state.imageName}),Object(r.jsx)(h.a,{autoClose:3e3})]})}}]),a}(n.Component);s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1olJF",SearchForm:"Searchbar_SearchForm__3JD7X",SearchFormBtn:"Searchbar_SearchFormBtn__vW6AW",SearchForm_button_label:"Searchbar_SearchForm_button_label__3dBBy",SearchForm_input:"Searchbar_SearchForm_input__BO62z"}}},[[50,1,2]]]);
//# sourceMappingURL=main.44b8ce7b.chunk.js.map