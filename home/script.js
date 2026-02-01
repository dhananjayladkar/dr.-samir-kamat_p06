document.querySelectorAll('.qa .q').forEach(q=>{
  q.addEventListener('click',()=>{
    const a=q.nextElementSibling;
    a.style.display = a.style.display==='block'?'none':'block';
  });
});
