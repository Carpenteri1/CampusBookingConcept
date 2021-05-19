using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CampusBokningsSystem.Models
{
    public class layouts
    {
        [Key]
        public int layout_id { get; set; }
        public DateTime timezone { get; set; }
        public int layout_type { get; set; }
    }
}
