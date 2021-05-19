using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CampusBokningsSystem.Models
{
    public class Resources
    {
        [Key]
        public int resource_Id { get; set; }
        [Column(TypeName = "varchar(80)")]
        [StringLength(80)]
        public string name { get; set; }
#nullable enable
        [Column(TypeName = "varchar(225)")]
        [StringLength(225)]
        public string? location { get; set; }
        [Column(TypeName = "varchar(225)")]
        [StringLength(225)]
        public string? contact_info { get; set; }
        [Column(TypeName = "TEXT")]
        public string? description { get; set; }
        [Column(TypeName = "TEXT")]
        public string? notes { get; set; }
        [Column(TypeName = "INT")]
        public int? min_duration { get; set; }
        [Column(TypeName = "INT")]
        public int? min_increment { get; set; }
        [Column(TypeName = "INT")]
        public int? max_duration { get; set; }
        [Column(TypeName = "decimal(7,2)")]
        public decimal? unit_cost { get; set; }
#nullable disable
        [Column(TypeName = "tinyint")]
        public byte autoassign { get; set; }
        [Column(TypeName = "tinyint")]
        public byte requires_approval { get; set; }
        [Column(TypeName = "tinyint")]
        public byte allow_multiday_reservations { get; set; }
#nullable enable
        [Column(TypeName = "mediumint")]
        public int? max_participants { get; set; }
        [Column(TypeName = "INT")]
        public int? min_notice_time_add { get; set; }
        [Column(TypeName = "INT")]
        public int? max_notice_time { get; set; }
        [Column(TypeName = "varchar(50)")]
        [StringLength(50)]
        public string? image_name { get; set; }
#nullable disable
        [ForeignKey("schedule_id")]
        [Column(TypeName = "smallint")]
        public int schedule_id { get; set; }
#nullable enable
        [Column(TypeName = "char(16)")]
        public char? legacyid { get; set; }
        [ForeignKey("group_id")]
        public int? admin_group_id { get; set; }
        [Column(TypeName = "varchar(20)")]
        [StringLength(20)]
        public string? public_id { get; set; }
#nullable disable
        [Column(TypeName = "tinyint(1)")]
        public byte allow_calendar_subscription { get; set; }
#nullable enable
        [Column(TypeName = "smallint")]
        public int? sort_order { get; set; }
        [Column(TypeName = "mediumint")]
        public int? resource_type_id { get; set; }
#nullable disable
        [Column(TypeName = "tinyint")]
        public byte status_id { get; set; }
#nullable enable
        [Column(TypeName = "smallint")]
        public int? resource_status_reason_id { get; set; }
        [Column(TypeName = "int")]
        public int? buffer_time { get;set; }
#nullable disable
        [Column(TypeName = "tinyint")]
        public byte enable_check_in { get; set; }
#nullable enable
        [Column(TypeName = "smallint")]
        public int? auto_release_minutes { get; set; }
        [Column(TypeName = "varchar(10)")]
        [StringLength(10)]
        public string? color { get; set; }
#nullable disable
        [Column(TypeName = "tinyint")]
        public byte allow_display { get; set; }
#nullable enable
        [Column(TypeName = "decimal(7,2)")]
        public decimal? credit_count { get; set; }
        [Column(TypeName = "decimal(7,2)")]
        public decimal? peak_credit_count { get; set; }
        [Column(TypeName = "int")]
        public int? min_notice_time_update { get; set; }
        [Column(TypeName = "int")]
        public int? min_notice_time_delete { get; set; }
        [Column(TypeName = "Datetime")]
        public DateTime? date_created { get; set; }
        [Column(TypeName = "Datetime")]
        public DateTime? last_modified { get; set; }
#nullable disable
    }
}
