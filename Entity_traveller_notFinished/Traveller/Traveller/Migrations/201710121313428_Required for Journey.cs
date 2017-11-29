namespace Traveller.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RequiredforJourney : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Journeys", "StartLocation", c => c.String(nullable: false, maxLength: 25));
            AlterColumn("dbo.Journeys", "Destination", c => c.String(nullable: false, maxLength: 25));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Journeys", "Destination", c => c.String(maxLength: 25));
            AlterColumn("dbo.Journeys", "StartLocation", c => c.String(maxLength: 25));
        }
    }
}
