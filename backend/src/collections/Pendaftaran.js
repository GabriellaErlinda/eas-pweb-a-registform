import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Pendaftaran = {
  slug: 'Pendaftaran',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
      unique: true,
    },
    {
      name: 'Tanggal_Lahir',
      label: 'Tanggal Lahir',
      type: 'date',
      required: true,
    },
    {
      name: 'Asal_Sekolah',
      label: 'Asal Sekolah',
      type: 'text',
      required: true,
    },
    {
      name: 'Gender',
      type: 'select',
      options: [
        {
          label: 'Laki-laki',
          value: 'Laki-laki',
        },
        {
          label: 'Perempuan',
          value: 'Perempuan',
        },
      ],
      required: true,
    },
    {
      name: "status",
      type: "select",
      options: ["Waiting", "Rejected", "Accepted"],
      defaultValue: "Waiting",
      required: true,
    },
    {
      name: 'Tanggal_Pendaftaran',
      label: 'Tanggal Pendaftaran',
      type: 'date',
      required: true,
    },
  ],
};

export default Pendaftaran;
