using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using React.Models;

namespace React.Controllers
{
    public class HomeController : Controller
    {
        [Route("{restaurantName?}")]
        public IActionResult Index(string restaurantName = "Test Restaurant")
        {
            var viewModel = GetMenuViewModel(restaurantName);
            return View(viewModel);
        }

        [Route("api/menuItems")]
        public JsonResult MenuItems(string restaurantName = "Test")
        {
            var viewModel = GetMenuViewModel(restaurantName);
            return Json(viewModel);
        }

        private static MenuViewModel GetMenuViewModel(string restaurantName) {
            return new MenuViewModel
            {
                Menu = new Menu {
                    RestaurantName = restaurantName,
                    Items = new List<Item> {
                        new Item {
                            Id = 1,
                            Name = "Traditional Lemonade &amp; Mint",
                            Price = 2.51m
                        },
                        new Item {
                            Id = 2,
                            Name = "Mojo Juice, Apple",
                            Price = 2.51m
                        },
                        new Item {
                            Id = 3,
                            Name = "Mojo Juice, Mango",
                            Price = 2.51m
                        },
                        new Item {
                            Id = 4,
                            Name = "Mojo Juice, Orange",
                            Price = 2.51m
                        },
                        new Item {
                            Id = 5,
                            Name = "Tropical Lightning, Apple",
                            Price = 2.51m
                        }
                    }
                },
                Basket = new Basket {
                    Address = "Tinsel Town- Demo, 1st Floor, Block 4, Imperial Place, Maxwell Road, AR51 1JN",
                    DeliveryFee = 0.5m,
                    Items = new List<Item> {
                        new Item {
                            Id = 2,
                            Quantity = 2
                        }
                    },
                    DeliveryTime = "Delivery ASAP"
                }
            };
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
