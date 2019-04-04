using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ToDoList.Controllers
{
    public class FormController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        //[HttpPost]
        //public JsonResult MyajaxCall(string order)
        //{
        //    return Json("Добавлено");
        //}

    }
}