jvm.VMLTextElement = function(config, style){
  jvm.VMLTextElement.parentClass.call(this, 'text', config, style);
};

jvm.inherits(jvm.VMLTextElement, jvm.VMLShapeElement);

jvm.VMLTextElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.applyAttr('x', this.get('x') || 0);
      this.applyAttr('y', this.get('y') || 0);
      break;
    case 'x':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'y':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLTextElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};