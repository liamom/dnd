using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DND.Controllers
{
    public class GameController : Controller
    {
        // GET: Game
        public ActionResult Index()
        {
            return View();
        }
	
	    public ActionResult _Characters()
        {
            ViewBag.test = "ControllerTest";
            return View();
        }

        public ActionResult Two()
        {
            ViewBag.test = "ControllerTest";
            return View();
        }
    }
}