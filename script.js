let fileInput = document.getElementById("file-input");
let textArea = document.getElementById("text-area");

var fileName;

function loadFile() {
  let file = fileInput.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    textArea.value = reader.result;

    fileName = file.name;
    fileName = fileName.split(".")[0];

    check();

    saveFile();
  };
}

function saveFile() {
  let textToSave = textArea.value;
  let blob = new Blob([textToSave], { type: "text/plain;charset=utf-8" });
  saveAs(blob, fileName + "_cleaned.gcode");
}

function replaceText() {
  let lines = textArea.value.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("; CP TOOLCHANGE LOAD")) {
      lines[i] = "; CP TOOLCHANGE LOAD\nM0 Change Filament ;\nM108 ;";
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
