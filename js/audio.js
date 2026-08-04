// =====================================
// Audio Compressor
// =====================================

const audioInput = document.getElementById("audioFile");
const qualitySelect = document.getElementById("quality");
const compressBtn = document.getElementById("compressBtn");
const downloadBtn = document.getElementById("downloadBtn");

const originalSize = document.getElementById("originalSize");
const compressedSize = document.getElementById("compressedSize");

let audioFile = null;

audioInput.addEventListener("change", () => {

    audioFile = audioInput.files[0];

    if (!audioFile) return;

    originalSize.textContent =
        (audioFile.size / 1024 / 1024).toFixed(2) + " MB";

});

compressBtn.addEventListener("click", () => {

    if (!audioFile) {
        alert("Please upload an audio file.");
        return;
    }

    // Placeholder (real audio compression will be added later)

    compressedSize.textContent =
        (audioFile.size / 1024 / 1024).toFixed(2) + " MB";

    downloadBtn.disabled = false;

});

downloadBtn.addEventListener("click", () => {

    if (!audioFile) return;

    const link = document.createElement("a");

    link.href = URL.createObjectURL(audioFile);

    link.download = "compressed-audio.mp3";

    link.click();

});
