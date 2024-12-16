
function openImage(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    
    modalImage.src = imgElement.src;
    
    
    modal.style.display = 'flex';
    
    
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 50);  
}


function closeImage() {
    const modal = document.getElementById('imageModal');
    
    
    modal.style.opacity = '0';
    
   
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);  
}


document.getElementById('imageModal').addEventListener('click', closeImage);
