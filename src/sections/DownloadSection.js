import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient.js'; 

function DownloadSection() {
    const [downloadCount, setDownloadCount] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const DOWNLOAD_COUNTER_ID = 1; 

    // Fetch the download count.
    useEffect(() => {
        const fetchDownloadCount = async () => {
            try {
                const { data, error } = await supabase
                    .from('download_count')
                    .select('download_count')
                    .eq('id', DOWNLOAD_COUNTER_ID)
                    .single();

                if (error) {
                    throw error;
                }
                if (data) {
                    setDownloadCount(data.download_count);
                }
            } catch (error) {
                console.error('Error fetching download count:', error.message);
                setDownloadCount(0);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDownloadCount();
    }, []);

    //runs when the download button is clicked.
    const handleDownload = async () => {
        try {
            // Tells Supabase to increment the download count
            const { error } = await supabase.rpc('increment_downloads', { 
                row_id_to_update: DOWNLOAD_COUNTER_ID 
            });

            if (error) {
                throw error;
            }

            // Updates the count
            setDownloadCount((prevCount) => prevCount + 1);

            // Creates a link and click it to start the download.
            const apkUrl = 'https://github.com/joaquingalang/pamagsalin/releases/latest/download/app-release.apk';
            const link = document.createElement('a');
            link.href = apkUrl;
            link.setAttribute('download', 'pamagsalin-release.apk');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            // If updating the count fails, log the error.
            console.error('Error incrementing download count:', error.message);
            
            // Still try to download the file for the user.
            const apkUrl = 'https://github.com/joaquingalang/pamagsalin/releases/latest/download/app-release.apk';
            window.open(apkUrl, '_blank');
        }
    };

    return (
        <div className="lg:w-[70vw] md:w-[80vw] h-[400px] bg-[#211A20]/60 rounded-lg m-10 shadow-md shadow-black/50 mb-10">
            <div className="h-[400px] flex flex-col justify-center items-center">
                <div className="h-8 rounded-full bg-gradient-to-b from-brand-velvet to-black/50 border-2 border-brand-pink/20 flex justify-center items-center mb-5">
                    <p className="mx-3 text-sm text-brand-gray-200 font-poppins">Download Now 🎙️</p>
                </div>
                
                <p className="text-center font-poppins font-light text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-gray-200 to-brand-gray-100 mb-5">Download Pamagsalin <br/> on Android Today!</p>
                <p className="font-poppins text-center text-white mb-5">A real-time Kapampangan-to-English translator with voice-to-voice support. <br/> Break language barriers, preserve culture.</p>
                
                <div className="flex">
                    {/* Download button triggers the handleDownload function */}
                    <div 
                        onClick={handleDownload}
                        className="h-10 bg-brand-pink rounded-full flex justify-center items-center ml-5 cursor-pointer shadow-lg shadow-brand-pink/20 transition-transform duration-200 hover:scale-105 active:scale-95"
                    >
                        <p className="px-6 font-poppins font-semibold">Download</p>
                    </div>

                    {/* user count is now dynamic */}
                    <div className="h-10 bg-transparent rounded-full flex justify-center items-center ml-5 cursor-pointer shadow-lg shadow-brand-pink/20 border-2 border-brand-pink">
                        <p className="px-6 font-poppins text-white">
                            {isLoading ? 'Loading...' : `${downloadCount} Users`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadSection;