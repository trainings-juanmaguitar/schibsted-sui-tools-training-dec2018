(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+IAO":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=m(n("06Hw")),r=m(n("YYXh")),a=m(n("YUSd")),l=m(n("Zv/C")),o=m(n("2lBV")),c=m(n("Dkg+")),i=m(n("Gjrs")),s=n("mXGw"),f=m(s),d=m(n("tj/o")),p=m(n("W0B4"));function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.i18n,n=e.movies;return f.default.createElement(f.default.Fragment,null,f.default.createElement(d.default,null,f.default.createElement("link",{rel:"canonical",href:"http://spa.mock/"})),f.default.createElement("h1",null,t.t("SEARCH_RESULTS",{query:"juanma",totalResults:234})),n&&n.length&&f.default.createElement("ul",null,n.map(function(e,t){return f.default.createElement("li",{key:t},e.title)})))}}]),t}(s.Component);h.contextTypes={domain:p.default.object,i18n:p.default.object},h.propTypes={},h.getInitialProps=function(){var e=(0,r.default)(u.default.mark(function e(t){var n,r,a,l,o=t.context,c=t.routeInfo;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.domain,r=o.i18n,a=c.params.query,console.log("query → "+a),e.next=5,n.get("search_movies_use_case").execute({query:a});case 5:return l=e.sent,e.abrupt("return",{movies:l,i18n:r});case 7:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.default=h}}]);