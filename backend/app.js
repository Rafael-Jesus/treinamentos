const express = require("express");
var cors = require("cors");
const path = require("path");


const app = express();
const uploadUser = require("./middlewares/uploadFiles");

const File = require("./models/Files");
const Users = require("./models/Users");
const { Console } = require("console");

app.use(express.json());

app.use("/files", express.static(path.resolve(__dirname, "public", "upload")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER, Content-Type, Authorization"
  );
  app.use(cors());
  next();
});

app.get("/list-treinamentos", async (req, res) => {
  await File.findAll()
    .then((files) => {
      return res.json({
        erro: false,
        files,
        url: "http://localhost:8080/files/users/",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Nenhuma arquivo encontrada!",
      });
    });
});

app.post("/upload-file", uploadUser.single("file"), async (req, res) => {
  if (req.file) {
    await File.create({
      file: req.file.filename,
      nametreinamento: req.body.nameTreinamento,
      setor: req.body.setor,
    })
      .then(() => {
        return res.json({
          erro: false,
          mensagem: "Upload realizado com sucesso!",
        });
      })
      .catch(() => {
        return res.status(400).json({
          erro: true,
          mensagem: "Erro: Upload não realizado com sucesso!",
        });
      });
  } else {
    return res.status(400).json({
      erro: true,
      mensagem:
        "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!",
    });
  }
});
app.post("/edit-file", async (req, res) => {
  console.log(req.body)

  await File.update({
    nametreinamento: req.body.nameTreinamento,
    setor: req.body.setor
  },
  { where: { id: req.body.idTreinamento } }
  )
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Upload realizado com sucesso!",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Upload não realizado com sucesso!",
      });
    });
});

app.post("/delete-file", async (req, res) => {
  await File.destroy({
    where: {
      id: req.query.idTreinamento,
    },
  })
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "File deletado com sucesso!",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: O arquivo não foi excluído!",
      });
    });
});

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
