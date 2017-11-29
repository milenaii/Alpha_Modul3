using DemoCodeFirst.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoCodeFirst
{
    public class StudentSystemContext: DbContext

    {
        public StudentSystemContext():
            base("StudentSystems")
        {

        }

        public DbSet<Student> Students { get; set; }
    }
}
