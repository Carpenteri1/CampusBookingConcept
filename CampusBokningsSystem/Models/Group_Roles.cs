using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CampusBokningsSystem.Models
{
    public class Group_Roles
    {
        [Key]
        public byte role_id { get; set; }
        public int group_id { get; set; }


    }
}
