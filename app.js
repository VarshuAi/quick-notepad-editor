
            const box = document.getElementById('note-box');
            box.value = localStorage.getItem('notepad_text') || 'Write anything here...';
            box.addEventListener('input', () => {
                localStorage.setItem('notepad_text', box.value);
            });
        