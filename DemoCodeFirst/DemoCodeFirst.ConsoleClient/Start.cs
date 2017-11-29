using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace DemoCodeFirst.ConsoleClient
{
    public class Start
    {
       public static void Main(string[] args)
        {

            var db = new StudentSystemContext();

            Console.WriteLine(db.Students.Count());
        }
    }
}
