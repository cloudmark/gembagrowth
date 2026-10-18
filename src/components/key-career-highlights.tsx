const highlights = [
    {
        title: 'Operational Efficiency',
        description: 'Improved schedule adherence by 20%, achieving over 90% reliability in production planning.',
    },
    {
        title: 'Cost Savings',
        description: 'Reduced inventory by 15% ($1M net saving) through streamlined WIP processes.',
    },
    {
        title: 'Capacity Stabilisation',
        description: 'Reduced demand variability by 40%, enabling more predictable production capacity.',
    },
    {
        title: 'Systems Innovation',
        description: 'Designed and implemented an internal MRP system to enhance planning and efficiency.',
    },
    {
        title: 'Global Operations Leadership',
        description: 'Directed international operations across China, Egypt, and Mexico, managing diverse teams and complex supply chains.',
    },
    {
        title: 'Business Turnaround',
        description: 'Transformed a $37M breakeven operation into a $50M business with sustained double-digit profitability.',
    },
    {
        title: 'Revenue Growth',
        description: 'Increased revenue by €2M without additional labour costs by optimising efficiency.',
    },
    {
        title: 'Productivity Gains',
        description: 'Reduced labour costs as a percentage of sales by 33% through targeted productivity improvements.',
    },
    {
        title: 'Strategic Expansion',
        description: 'Oversaw the full transfer of manufacturing from the Philippines to Egypt, including expansion into new product lines.',
    },
    {
        title: 'Throughput Improvement',
        description: 'Enhanced production throughput by reducing end-of-line testing time by 50% through redesigned methodologies.',
    },
];

export default function KeyCareerHighlights() {
    return (
      <section className="biography-highlights" aria-labelledby="career-highlights-heading">
        <h2 id="career-highlights-heading">Key Career Highlights</h2>
        <div className="biography-highlights-list">
          {highlights.map(highlight => (
            <div key={highlight.title} className="biography-highlight">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
}
