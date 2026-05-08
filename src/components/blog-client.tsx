
'use client';

import { useState, useMemo, useEffect } from 'react';
import type { PostData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ListFilter, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import BlogList from '@/components/blog-list';

type BlogClientProps = {
    allPosts: Omit<PostData, 'content'>[];
}

export default function BlogClient({ allPosts }: BlogClientProps) {
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [allPosts]);

  useEffect(() => {
    if (selectedTags.length > 0) {
      setFilteredPosts(
        allPosts.filter(post => 
          selectedTags.some(tag => post.tags?.includes(tag))
        )
      );
    } else {
      setFilteredPosts(allPosts);
    }
  }, [selectedTags, allPosts]);

  const handleTagSelection = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const getTriggerText = () => {
    if (selectedTags.length === 0) {
        return 'Filter by Tag';
    }
    if (selectedTags.length === 1) {
        return `Filtering: ${selectedTags[0]}`;
    }
    return `Filtering: ${selectedTags.length} tags`;
  };

  return (
    <>
      <div className="flex justify-center items-center gap-4 mb-12">
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                      <ListFilter className="mr-2 h-4 w-4" />
                      {getTriggerText()}
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Filter Posts by Tag</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {allTags.map(tag => (
                      <DropdownMenuCheckboxItem
                          key={tag}
                          checked={selectedTags.includes(tag)}
                          onSelect={(e) => e.preventDefault()} // Prevents menu from closing
                          onClick={() => handleTagSelection(tag)}
                      >
                          {tag}
                      </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
          </DropdownMenu>
          {selectedTags.length > 0 && (
              <Button variant="ghost" onClick={() => setSelectedTags([])} className="text-muted-foreground">
                  <X className="mr-2 h-4 w-4" />
                  Clear Filters
              </Button>
          )}
      </div>
      
      <BlogList allPosts={filteredPosts} />
    </>
  );
}
