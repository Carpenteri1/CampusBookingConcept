using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CampusBokningsSystem.Models
{
    public class Schedules
    {
        [Key]
        public int schedule_id { get; set; } 
        public string name { get; set; }
        public byte isdefult { get; set; }
        public byte weekdaystart { get; set; }
        public byte daysvisible { get; set; }
        
        [ForeignKey("layout_id")]
        public virtual layouts layouts_id { get; set; }
        public char legacyid { get; set; }
        public string public_id { get; set; }
        public byte allow_calendar_subscription { get; set; }
        public int admin_group_id { get; set; }
        public DateTime start_date { get; set; }
        public DateTime end_date { get; set; }
        public byte allow_concurrent_bookings { get; set; }
        public byte default_layout { get; set; }

    }
}
