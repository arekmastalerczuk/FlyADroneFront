import React, {FormEvent, useState} from 'react';
import './AddForm.css';
import {Btn} from "../common/Btn";
import {geocode} from "../../utils/geocoding";

export const AddForm = () => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        spotAddress: '',
        siteUrl: '',
        facebookUrl: '',
        youtubeUrl: '',
        instagramUrl: '',
        image: '',
    });

    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');

    const saveSpot = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const {latitude, longitude} = await geocode(form.spotAddress);
            const res = await fetch(`http://localhost:3001/spot`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    latitude,
                    longitude
                }),
            });

            const data = await res.json();
            setId(data.id);
        } finally {
            setLoading(false);
        }
    }

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <p>Trwa dodawanie miejscówki...</p>
    }

    if (id) {
        return <h2>Miejscówka "{form.name}" została dodana pod id: {id}</h2>
    }

    return (
        <form className="add-spot__form" action="" onSubmit={saveSpot}>
            <h2>Dodawanie miejscówki</h2>
            <p>
                <label>
                    Nazwa:<br/>
                    <input
                        type="text"
                        name="name"
                        maxLength={100}
                        required
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Opis:<br/>
                    <textarea
                        name="description"
                        maxLength={1000}
                        value={form.description}
                        onChange={e => updateForm('description', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Adres miejscówki:<br/>
                    <input
                        name="spotAddress"
                        maxLength={150}
                        required
                        value={form.spotAddress}
                        onChange={e => updateForm('spotAddress', e.target.value)}
                    />
                    <small>Podaj miejscowość i ulicę (bez słowa "ul."), np. <strong>Katowice, Rynek 2</strong></small>
                </label>
            </p>
            <p>
                <label>
                    Strona www:<br/>
                    <input
                        type="url"
                        name="siteUrl"
                        maxLength={100}
                        value={form.siteUrl}
                        onChange={e => updateForm('siteUrl', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Facebook:<br/>
                    <input
                        type="url"
                        name="facebookUrl"
                        maxLength={100}
                        value={form.facebookUrl}
                        onChange={e => updateForm('facebookUrl', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    YouTube:<br/>
                    <input
                        type="url"
                        name="youtubeUrl"
                        maxLength={100}
                        value={form.youtubeUrl}
                        onChange={e => updateForm('youtubeUrl', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Instagram:<br/>
                    <input
                        type="url"
                        name="instagramUrl"
                        maxLength={100}
                        value={form.instagramUrl}
                        onChange={e => updateForm('instagramUrl', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Zdjęcie:<br/>
                    <input
                        type="file"
                        name="image"
                        maxLength={1000}
                        value={form.image}
                        onChange={e => updateForm('image', e.target.value)}
                    />
                </label>
            </p>
            <Btn text="Wyślij"/>
        </form>
    )
}
