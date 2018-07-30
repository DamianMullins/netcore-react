using System.Collections.Generic;

namespace React.Models
{
    public class Basket
    {
        public string Address { get; set; }
        public IEnumerable<Item> Items { get; set; }
        public decimal DeliveryFee { get; set; }
        public string DeliveryTime { get; set; }

        public Basket()
        {
            Items = new List<Item>();
        }
    }
}
