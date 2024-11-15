import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3  ml-4 space-y-5 mt-10">
            <div className='bg-[#6047ec1a] py-5 rounded-xl'>
                <h3 className='text-[#6047EC] font-bold text-2xl text-center'>Spent time on read: {readingTime}</h3>
            </div>
            <div className='bg-[#1111110d] py-5 rounded-xl'>
                <h2 className='text-3xl p-6 font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark 
                        key={bookmark.id}
                        bookmark={bookmark}
                        ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;