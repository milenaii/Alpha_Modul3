namespace Traveller.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Journeys : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Journeys", "Ticket_Id", c => c.Int());
            CreateIndex("dbo.Journeys", "Ticket_Id");
            AddForeignKey("dbo.Journeys", "Ticket_Id", "dbo.Tickets", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Journeys", "Ticket_Id", "dbo.Tickets");
            DropIndex("dbo.Journeys", new[] { "Ticket_Id" });
            DropColumn("dbo.Journeys", "Ticket_Id");
        }
    }
}
