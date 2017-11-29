namespace Traveller.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Journeyproperty : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Tickets", "JourneyId", c => c.Int());
            CreateIndex("dbo.Tickets", "JourneyId");
            AddForeignKey("dbo.Tickets", "JourneyId", "dbo.Journeys", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Tickets", "JourneyId", "dbo.Journeys");
            DropIndex("dbo.Tickets", new[] { "JourneyId" });
            DropColumn("dbo.Tickets", "JourneyId");
        }
    }
}
