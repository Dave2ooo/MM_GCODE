let fileInput = document.getElementById("file-input");
let textArea = document.getElementById("text-area");

var fileName;

function loadGcode() {
  let file = fileInput.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    textArea.value = reader.result;

    fileName = file.name;
    fileName = fileName.slice(0, -6);
  };
}

function loadFile() {
  check();
}

function saveFile() {
  let textToSave = textArea.value;
  let blob = new Blob([textToSave], { type: "text/plain;charset=utf-8" });
  saveAs(blob, fileName + "_edited.gcode");
}

function replaceText() {
  let lines = textArea.value.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("; CP TOOLCHANGE LOAD")) {
      lines[i] =
        "; CP_TOOLCHANGE_LOAD_EDITED\nM300 S1000 P200 ; chirp\nM0 Change Filament ;\nM108 ;";
    }
  }
  textArea.value = lines.join("\n");
}

function removeLines() {
  let lines = textArea.value.split("\n");
  for (let i = lines.length - 1; i >= 0; i--) {
    if (/^(T0|T1)$/.test(lines[i])) {
      lines.splice(i, 1);
    }
  }
  textArea.value = lines.join("\n");
}

function check() {
  const checkbox1 = document.getElementById("checkbox1");
  const checkbox2 = document.getElementById("checkbox2");
  if (checkbox1.checked) {
    replaceText();
  }
  if (checkbox2.checked) {
    removeLines();
  }
}
