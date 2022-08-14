const router = require("express").Router();
const productController = require("./controller");

router.get("/product", productController.index);

router.get("/users", productController.getusers);
router.get("/users/:id", productController.getoneuser);
router.post("/users/", productController.storeuser);
router.patch("/users/:id", productController.updateuser);
router.delete("/users/:id", productController.deleteuser);

router.get("/tiketBanten", productController.getDataTiketBanten);
router.get("/tiketBekasi", productController.getDataTiketBekasi);
router.get("/tiketBogor", productController.getDataTiketBogor);
router.get("/tiketJakbar", productController.getDataTiketJakbar);
router.get("/tiketJakpus", productController.getDataTiketJakpus);
router.get("/tiketJaksel", productController.getDataTiketJaksel);
router.get("/tiketJakut", productController.getDataTiketJakut);
router.get("/tiketJaktim", productController.getDataTiketJaktim);
router.get("/tiketTangerang", productController.getDataTiketTangerang);

module.exports = router;
