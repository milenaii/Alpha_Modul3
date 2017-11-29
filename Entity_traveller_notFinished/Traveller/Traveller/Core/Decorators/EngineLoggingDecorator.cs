using Bytes2you.Validation;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Traveller.Core.Providers;

namespace Traveller.Core.Decorators
{
    public class EngineLoggingDecorator : IEngine
    {
        private readonly IEngine engine;
        private readonly IWriter writer;

        public EngineLoggingDecorator(IEngine engine, IWriter writer)
        {
            Guard.WhenArgument(engine, "engine").IsNull().Throw();
            Guard.WhenArgument(writer, "writer").IsNull().Throw();

            this.engine = engine;
            this.writer = writer;
        }

        public void Start()
        {
            this.writer.WriteLine("The Engine is starting...");

            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            this.engine.Start();

            stopwatch.Stop();
            this.writer.WriteLine($"The Engine worked for {stopwatch.ElapsedMilliseconds} milliseconds.");
        }
    }
}
