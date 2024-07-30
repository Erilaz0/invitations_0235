const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const addMusic = (req, res) => {
    upload.single('music')(req, res, (err) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        if (!req.file) {
            return res.status(400).send('No file uploaded');
        }
        res.json({ fileUrl: `http://localhost:8888/uploads/${req.file.filename}` });
    });
};

const addMusicUI = (req, res) => {
    res.status(200).render('music');
};

module.exports = { addMusic, addMusicUI };