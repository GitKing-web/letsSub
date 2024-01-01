const router = require("express").Router();

// return login page
router.get("/",(req,res,next) => {
	try{
		return res.status(200).render("index");
	} catch(error){
		next(error);
	}
});

// return register page
router.get("/register",(req,res,next) => {
	try{
		return res.status(200).render("register");
	} catch(error){
		next(error);
	}
});

// return recovery page
router.get("/recovery",(req,res,next) => {
	try{
		return res.status(200).render("forget");
	} catch(error){
		next(error);
	}
});

// logout page
router.get("/logout",(req,res,next) => {
	try{
		return res.status(403).redirect("/");
	} catch(error){
		next(error);
	}
});

// return dashboard page
router.get("/dashboard",(req,res,next) => {
	try{
		return res.status(200).render("dashboard");
	} catch(error){
		next(error);
	}
});

// return profile page
router.get("/profile",(req,res,next) => {
	try{
		return res.status(200).render("profile");
	} catch(error){
		next(error);
	}
});

// return transactions page
router.get("/transactions",(req,res,next) => {
	try{
		return res.status(200).render("transaction");
	} catch(error){
		next(error);
	}
});

// return contact-us page
router.get("/contact-us",(req,res,next) => {
	try{
		return res.status(200).render("contact");
	} catch(error){
		next(error);
	}
});

// return buy-data page
router.get("/buy-data",(req,res,next) => {
	try{
		return res.status(200).render("buy-data");
	} catch(error){
		next(error);
	}
});

// return buy-airtime page
router.get("/buy-airtime",(req,res,next) => {
	try{
		return res.status(200).render("buy-airtime");
	} catch(error){
		next(error);
	}
});

// return fund-wallet page
router.get("/fund-wallet",(req,res,next) => {
	try{
		return res.status(200).render("fund-wallet");
	} catch(error){
		next(error);
	}
});

module.exports = router;