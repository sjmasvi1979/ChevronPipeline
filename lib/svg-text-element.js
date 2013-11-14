jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
  
  var textNode = document.createTextNode(config.caption);
  this.node.appendChild(textNode);
 
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);