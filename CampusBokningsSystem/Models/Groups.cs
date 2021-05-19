using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CampusBokningsSystem.Models
{
    public class Groups
    {
        [Key]
        public int group_id { get; set; }
        public string name { get; set; }
        public int admin_group_id { get; set; }
        public char legacyid { get; set; }
        public byte isdefualt { get; set; }
    }
}
