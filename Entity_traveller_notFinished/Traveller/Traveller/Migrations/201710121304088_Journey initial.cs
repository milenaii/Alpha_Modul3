namespace Traveller.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Journeyinitial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Journeys",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        StartLocation = c.String(maxLength: 25),
                        Destination = c.String(maxLength: 25),
                        Distance = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
        }
        
        public override void Down()
        {
            DropTable("dbo.Journeys");
        }
    }
}
