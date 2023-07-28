/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react'
import { parseCookies } from 'nookies';
import axios from 'axios'
import Axios from 'axios'
import dynamic from 'next/dynamic';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router';
import { CreateBlog,CreateBlogEN, Project, Equip } from '@/components';
export default function index() {
    const [blog, setBlog] = useState(false)
    const [sign, setSign] = useState(false)
    const [training, setTraining] = useState(false)
    const [blogen,setBlogEN] = useState(false);
    const [instructor, setInstructor] = useState(false);
    const [person, setPerson] = useState({});
    const [trainers, setTrainers] = useState([{}]);
    const [add, setAdd] = useState(false);
    const [name, setName] = useState('');
    const [stat, setStat] = useState('');
    const [photo, setPhoto] = useState();
    const [vv, setVv] = useState(false);
    const [nname, setNname] = useState('');
    const [nphoto, setNphoto] = useState();
    const [nstat, setNstat] = useState('');
    const [editImage, setEditImage] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editStat, setEditStat] = useState(false);
    const [edit, setEdit] = useState(false);
    const [selectedRow, setSelectedRow] = useState();
    const [loading, setLoading] = useState(false);
    const [loadAdd, setLoadAdd] = useState(false);
    return (
        <>
            <div className="dmt__dashboard">
                <div className="dmt__dashboard-header">
                    <h1>Welcome to your admin dashboard</h1>
                </div>
                <div className="dmt__dashboard-content">
                    <div className="dmt__dashboard-sidebar">
                        <div className="dmt__dashboard-sidebar_links">
                            <ul>
                                <li onClick={() => { setBlog(true); setSign(false); setTraining(false);setBlogEN(false) }}>Créer Un Article</li>
                                <li onClick={() => { setBlog(false); setSign(false); setTraining(false);setBlogEN(true) }}>English Article</li>
                                <li onClick={() => { setBlog(false); setSign(true); setTraining(false);setBlogEN(false) }}>Les Projets</li>
                                <li onClick={() => { setBlog(false); setSign(false); setTraining(true);setBlogEN(false) }}>Les Equipments</li>
                            </ul>
                        </div>
                    </div>
                    {blog && (
                        <CreateBlog />
                    )}
                    {blogen && (
                        <CreateBlogEN />
                    )}
                    {sign && (
                        <Project />
                    )}
                    {training && (
                        <>
                            <Equip />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    const cookies = parseCookies(context);
    if (!cookies.isAdmin) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
    return { props: {} };
}
