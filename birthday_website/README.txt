Birthday Website – Quick Start
================================

Files:
- index.html         -> Main greeting page (press 'G' to open gallery)
- gallery.html       -> Masonry photo gallery with polaroid style (press 'H' to go home, 'C' for confetti)
- styles.css         -> Shared styles
- script.js          -> Typewriter, key bindings, confetti, music toggle
- images/            -> Put your photos here and rename paths inside gallery.html

How to use:
1) Download and unzip the folder.
2) Put your girlfriend's photos into the `images/` folder and rename them as photo1.jpg, photo2.jpg, etc.
   (Or edit gallery.html to use your exact filenames).
3) Open `index.html` double-click in your browser. Press "G" to open the gallery.
4) To change her displayed name, open index.html and edit: <span id="name">My Queen</span>.
5) To change the keyboard key for opening gallery, edit script.js (look for key === 'g').
6) Optional music: replace the <source> URL in index.html with your own mp3 link or remove the audio block.

Tip: You can deploy this on Netlify, GitHub Pages, or Vercel by dragging the folder into a new site/project.
Enjoy and happy birthday! 🎉
