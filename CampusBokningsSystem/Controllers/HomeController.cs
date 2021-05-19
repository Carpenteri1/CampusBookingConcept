﻿using CampusBokningsSystem.Models;
using CampusBokningsSystem.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace CampusBokningsSystem.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly CampusDbContext dbcontext;
        public HomeController(ILogger<HomeController> logger, CampusDbContext dbcontext)
        {
            _logger = logger;
            this.dbcontext = dbcontext;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var resources = new List<Resources>();
            try
            {
                 resources = dbcontext.resources.ToList();
            }
            catch(Exception e)
            {
                Debug.WriteLine(e);
            }

            return View(resources);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
