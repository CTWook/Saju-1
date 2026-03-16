
interface ReadingCardProps {
  imageUrl: string;
  title: string;
  tags: string[];
  viewCount: string;
}

const ReadingCard: React.FC<ReadingCardProps> = ({ imageUrl, title, tags, viewCount }) => {
  return (
    <div className="flex-shrink-0 w-[280px] group">
      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white text-shadow">
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-1.5">
          {tags.map((tag, index) => (
            <span key={index} className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full text-[10px] font-medium">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-base">visibility</span>
          <span className="text-xs font-light">{viewCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ReadingCard;
