// =====================================
// Video Compressor
// =====================================

const videoInput = document.getElementById("videoFile");
const qualitySelect = document.getElementById("quality");
const compressBtn = document.getElementById("compressBtn");
const downloadBtn = document.getElementById("downloadBtn");

const originalSize = document.getElementById("originalSize");
const compressedSize = document.getElementById("compressedSize");

let videoFile = null;

videoInput.addEventListener("change", () => {

    videoFile = videoInput.files[0];

    if (!videoFile) return;

    originalSize.textContent =
        (videoFile.size / 1024 / 1024).toFixed(2) + " MB";

});

compressBtn.addEventListener("click", () => {

    if (!videoFile) {
        alert("Please upload a video.");
        return;
    }

    // Placeholder (real video compression will be added later)

    compressedSize.textContent =
        (videoFile.size / 1024 / 1024).toFixed(2) + " MB";

    downloadBtn.disabled = false;

});

downloadBtn.addEventListener("click", () => {

    if (!videoFile) return;

    const link = document.createElement("a");

    link.href = URL.createObjectURL(videoFile);

    link.download = "compressed-video.mp4";

    link.click();

});
