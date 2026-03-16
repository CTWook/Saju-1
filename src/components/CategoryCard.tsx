
interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, badge, badgeColor }) => {
  return (
    <div className="group bg-surface-container-low p-6 rounded-xl hover:bg-surface-container-lowest transition-all cursor-pointer border border-transparent hover:border-secondary/20">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {badge && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </div>
  );
}

export default CategoryCard;
