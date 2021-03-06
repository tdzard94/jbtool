function setNativeValue(element, value) {
  let lastValue = element.value;
  element.value = value;
  let event = new Event('input', { target: element, bubbles: true });
  event.simulated = true;
  let tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  element.dispatchEvent(event);
}
let input = document.getElementById('{element}');
setNativeValue(input, '{value}');


const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
function simulateMouseClick(element){
  mouseClickEvents.forEach(mouseEventType =>
    element.dispatchEvent(
      new MouseEvent(mouseEventType, {
         view: window,
         bubbles: true,
         cancelable: true,
         buttons: 1
  })));
}

let element =document.document.getElementById('username')
simulateMouseClick(element);
