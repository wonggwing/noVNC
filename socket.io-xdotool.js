var socket = io();

window.mousemoveRelative = function(x, y) {
  socket.emit("m", x, y);
};

window.mouseDown = function(bmask) {
  socket.emit("d", bmask);
};

window.mouseClick = function(bmask) {
  socket.emit("c", bmask);
};
