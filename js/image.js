// =====================================
// Image Compressor
// =====================================

const imageInput = document.getElementById("imageFile");
const qualitySelect = document.getElementById("quality");
const compressBtn = document.getElementById("compressBtn");
const downloadBtn = document.getElementById("downloadBtn");

const originalSize = document.getElementById("originalSize");
const compressedSize = document.getElementById("compressedSize");

let compressedBlob = null;

imageInput.addEventListener("change", () => {

    const file = imageInput.files[0];

    if (!file) return;

    originalSize.textContent =
        (file.size / 1024).toFixed(2) + " KB";

});

compressBtn.addEventListener("click", () => {

    const file = imageInput.files[0];

    if (!file) {
        alert("Please upload an image.");
        return;
    }

    const quality = Number(qualitySelect.value);

    const reader = new FileReader();

    reader.onload = function (event) {

        const img = new Image();

        img.onload = function () {

            const canvas = document.createElement("canvas");

            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0);

            canvas.toBlob(function(blob){

                compressedBlob = blob;

                compressedSize.textContent =
                    (blob.size / 1024).toFixed(2) + " KB";

                downloadBtn.disabled = false;

            }, "image/jpeg", quality);

        };

        img.src = event.target.result;

    };

    reader.readAsDataURL(file);

});

downloadBtn.addEventListener("click", () => {

    if (!compressedBlob) return;

    const link = document.createElement("a");

    link.href = URL.createObjectURL(compressedBlob);

    link.download = "compressed-image.jpg";

    link.click();

});
