export default function LoginPage() {
  return (
    <section className='bg-blue-100 p-[36px] rounded-2xl'>
      <h1 className='mb-6'>κ°μ π¬</h1>

      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='login-id' className='text-left'>
            μμ΄λ
          </label>
          <input id='login-id' type='text' className='form-input rounded border px-4 py-1' />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='login-pw' className='text-left'>
            λΉλ°λ²νΈ
          </label>
          <input id='login-pw' type='text' className='form-input rounded border px-4 py-1' />
        </div>

        <button>κ°μ λκ°μ</button>
      </div>
    </section>
  )
}
